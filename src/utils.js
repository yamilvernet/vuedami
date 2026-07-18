import axios from "axios";

const TWO_HOURS_IN_MS = 2 * 60 * 60 * 1000;

export function date_as_string(date) {
    if (!date) return '';

    // Si ya es Date
    if (date instanceof Date) {
        return date.toDateString();
    }

    if (typeof date === 'string') {
        // Separar fecha de hora (si existe)
        const [datePart] = date.split(' ');
        const [y, m, d] = datePart.split('-').map(Number);

        if (!y || !m || !d) return '';

        const localDate = new Date(y, m - 1, d); // fecha LOCAL
        return localDate.toDateString();
    }

    return '';
}


/**
 * Devuelve en una promesa la entidad consultada a través de la API
 * @param {String} entity Entidad buscada siguiendo el path de Firebase.
 * @returns {Promise} Una promesa que resuelve con los datos o null.
 */
export function get_or_load_data_from(entity) {
    if (!entity || typeof entity !== 'string') {
        return Promise.reject('Invalid entity provided');
    }

    let url = null;

    if (entity.includes('http') || entity.includes('https')) {
        url = entity;
    } else {
        url = `https://machuinka-f6ef7-default-rtdb.firebaseio.com/${entity}.json`;
    }

    // console.log('URL:', url);

    // Verificar si la información ya está almacenada en localStorage
    const storedData = localStorage.getItem(entity);
    if (storedData) {
        let storedDataJson;
        try {
            storedDataJson = JSON.parse(storedData);
        } catch (error) {
            console.error('Error parsing localStorage data:', error);
            localStorage.removeItem(entity); // Eliminar datos corruptos
            storedDataJson = null;
        }

        if (storedDataJson) {
            const { timestamp, data } = storedDataJson;
            const currentTime = new Date().getTime();

            // Verificar si la información almacenada es más reciente que 2 horas
            if (currentTime - timestamp < TWO_HOURS_IN_MS) {
                return Promise.resolve(data);
            } else {
                localStorage.removeItem(entity); // Eliminar datos antiguos
            }
        }
    }

    // Descargar la información de la API si no está almacenada o es más antigua que 2 horas
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((response) => {
                if (response.status === 200) {
                    const dataToStore = {
                        data: response.data,
                        timestamp: new Date().getTime(),
                    };
                    localStorage.setItem(entity, JSON.stringify(dataToStore));
                    resolve(response.data);
                } else {
                    reject(`API responded with status: ${response.status}`);
                }
            })
            .catch((error) => {
                console.error('Error fetching data from API:', error);
                reject('Failed to fetch data from API');
            });
    });
}

/**
 * Capitaliza la primera letra de una palabra.
 * @param {String} word Palabra a capitalizar.
 * @returns {String} Palabra capitalizada.
 */
export function capitalize(word) {
    if (typeof word === 'string' && word.length) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return word;
}

/**
 * Capitaliza la primera letra de cada palabra en un string.
 * @param {String} sentence Frase o texto a capitalizar.
 * @returns {String} Texto con cada palabra capitalizada.
 */
export function capitalize_each_word(sentence) {
    if (typeof sentence !== 'string' || !sentence.length) {
        return sentence;
    }

    return sentence
        .split(' ') // Divide el string en palabras
        .map(word => capitalize(word)) // Capitaliza cada palabra
        .join(' '); // Une las palabras nuevamente en un string
}

/**
 * Converts a slug string (e.g., "hello-world") into a human-readable format
 * with each word capitalized (e.g., "Hello World").
 *
 * @param {string} slug - The slug string to be converted. It should be a string
 *                        with words separated by hyphens ("-").
 * @returns {string} - The human-readable string with each word capitalized.
 *                     If the input is not a valid string or is empty, it returns the input as is.
 */
export function de_slugify(slug,formatter) {
    if (typeof slug !== 'string' || !slug.length) {
        return slug;
    }

    return (formatter) ? formatter(slug.replace(/-/g, ' ')) : slug.replace(/-/g, ' ');
}

export function slugify(text,separator){
    return text
        .toString()                     // Cast to string
        .toLowerCase()                  // Convert the string to lowercase letters
        .normalize('NFD')       // The normalize() method returns the Unicode Normalization Form of a given string.
        .trim()                         // Remove whitespace from both sides of a string
        .replace(/\s+/g, (separator!=undefined && separator!=null) ? separator : '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, (separator!=undefined && separator!=null) ? separator : '-');        // Replace multiple - with single -
}

export function discount_and_format_price (price, discount) {
    return parseInt(price - (price * (discount / 100))) 
}

/**
 * Constructs the path to an image file based on the provided filename, directory slug, and format.
 *
 * @param {string} filename - The name of the image file (including extension).
 * @param {string} slug_directory - The slug representing the directory where the image is stored.
 * @param {string} format - The format or subdirectory indicating the image type (e.g., 'thumb', 'review', 'desktop'. 'mobile').
 * @returns {string} The constructed image path as a string.
 */
export function get_image_path(slug_directory,format,filename){
    // console.log('filename',filename);
    return '/images/tours/' + slug_directory + '/' + format + '/' + filename;
}

export function simple_markdown_format(text) {
  if (!text) return '';

  // Normalizar espacios
  text = text.replace(/\s+/g, ' ').trim();

  // Títulos ## Day X
  text = text.replace(
    /##\s*(Day\s*\d+:[^*]+)/g,
    '<div class="fw-bold mb-1">‣ $1</div>'
  );

  // Negritas **texto**
  text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

  // Ítems con guión " - Algo:"
  text = text.replace(
    /\s-\s<b>([^:]+):<\/b>/g,
    '<br>• <b>$1:</b>'
  );

  // Separar bloques clave
  text = text.replace(
    /(Evening:|Overnight:|Early morning:|Afternoon:|Transfer to Cusco:)/g,
    '<br><b>$1</b>'
  );

  return text;
}



  export function get_whatsapp_url(phone,message){
    const m = (message) ? message : '';
    if(m) return `https://api.whatsapp.com/send?phone=${phone.replaceAll(' ','').replaceAll('-','').replaceAll('+','')}&text=${m}`;
    return `https://api.whatsapp.com/send?phone=${phone.replaceAll(' ','').replaceAll('-','').replaceAll('+','')}`;
  }

  export function anchor_hash_check(route){
    console.log(window.location.hash,route.hash);

    if (window.location.hash === route.hash) {
        const el = document.getElementById(route.hash.slice(1))
        console.log(el);
        
        if (el) {
        window.scrollTo(0, el.offsetTop)
        }
    } else {
        window.scrollTo(0, 0)
    }

  }

export  function is_valid_text(value) {
    return typeof value === 'string' && value.trim().length > 0;
}

export function is_set(value) {
    return value !== undefined && value !== null;
}
export function is_empty(value) {
    return value === undefined || value === null || value === '';
}
export function is_string(value) {
    return typeof value === 'string';
}

export function date_as_month_year(date) {
    if (!date || !(date instanceof Date)) {
        return '';
    }
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('es-ES', options);
}

export function format_date_local(dateString) {
  const [year, month, day] = dateString.split('-');
  const date = new Date(year, month - 1, day); // Usa constructor local
  return date.toDateString(); // o toLocaleDateString() para más opciones
}


/**
 * Valida si una fecha está dentro de un rango permitido.
 * @param {Date} date - Fecha a validar
 * @param {Object} options
 * @param {Date} [options.min] - Fecha mínima permitida
 * @param {Date} [options.max] - Fecha máxima permitida
 * @param {boolean} [options.requireFuture] - Si debe ser una fecha futura (ej: pasaporte)
 * @returns {boolean}
 */
export function validateDateInRange(date, { min, max, requireFuture = false } = {}) {
  if (!(date instanceof Date) || isNaN(date)) return false

  const now = new Date()

  if (requireFuture && date < now) return false
  if (min && date < min) return false
  if (max && date > max) return false

  return true
}

/**
 * Valida una fecha de nacimiento realista (entre 0 y 100 años)
 * @param {Date} date
 * @returns {boolean}
 */
export function isValidBirthDate(date) {
  const now = new Date()
  const max = now
  const min = new Date(now.getFullYear() - 100, now.getMonth(), now.getDate())
  return validateDateInRange(date, { min, max })
}

/**
 * Valida que un pasaporte no esté vencido (fecha futura)
 * @param {Date} expirationDate
 * @returns {boolean}
 */
export function isValidPassportExpiration(expirationDate) {
  return validateDateInRange(expirationDate, { requireFuture: true })
}

/**
 * Parsea fechas en formatos: 'YYYY-MM-DD', 'DD-MM-YYYY', 'MM-DD-YYYY', incluyendo '/' como separador.
 * Retorna null si la fecha es inválida o ambigua.
 * @param {string} input
 * @returns {Date|null}
 */
export function parseSafeDate(input) {
  if (typeof input !== 'string') return null

  // Unificar separador
  const normalized = input.replace(/\//g, '-').trim()
  let parts = normalized.split('-').map(Number)

  // Validar que todas las partes sean números válidos
  if (parts.length !== 3 || parts.some(isNaN)) return null

  const [a, b, c] = parts

  // ISO: YYYY-MM-DD
  if (a > 999 && b >= 1 && b <= 12 && c >= 1 && c <= 31) {
    return buildValidDate(a, b, c)
  }

  // Latino: DD-MM-YYYY
  if (c > 999 && b >= 1 && b <= 12 && a >= 1 && a <= 31) {
    return buildValidDate(c, b, a)
  }

  // USA: MM-DD-YYYY
  if (c > 999 && a >= 1 && a <= 12 && b >= 1 && b <= 31) {
    return buildValidDate(c, a, b)
  }

  return null
}

/**
 * Devuelve un objeto Date solo si es una fecha válida.
 */
function buildValidDate(year, month, day) {
  const date = new Date(year, month - 1, day)
  return (date.getFullYear() === year &&
          date.getMonth() === month - 1 &&
          date.getDate() === day)
    ? date
    : null
}


/**
 * Valida un número de pasaporte internacional (genérico)
 * @param {string} passportNumber
 * @returns {boolean}
 */
export function isValidInternationalPassport(passportNumber) {
  if (typeof passportNumber !== 'string') return false

  const cleaned = passportNumber.trim().toUpperCase()

  // Longitud mínima 6, máxima 10 (según países como EE.UU., India, UK, etc.)
  if (cleaned.length < 6 || cleaned.length > 10) return false

  // Debe contener solo letras y números (sin espacios, guiones, etc.)
  const regex = /^[A-Z0-9]+$/
  return regex.test(cleaned)
}

export function to_date_key(date) {
  const d = new Date(date)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}


// export const PHONE_NUMBER = 51930212433;
// export const PHONE_NUMBER_FORMATTED = '+51 930 212 433';

export function getPhonePrefix(idd) {
  if (!idd) return '+';

  // Si tiene un solo sufijo lo usamos
  if (idd.suffixes?.length === 1) {
    return `${idd.root}${idd.suffixes[0]}`;
  }

  // Si tiene múltiples suffixes usamos solo el root
  return idd.root;
}