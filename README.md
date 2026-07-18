# Machu Picchu Inka Trek

Sitio web de venta de tours a Machu Picchu y los alrededores de Cusco.

## Scripts php en uso
- capture_paypal_order.php
- config.php
- create_order.php
- create_reservation.php
- db.php
- dispatch_mail_jobs.php
- get_member_reservation_order.php
- get_order_detail.php
- get_orders.php
- paypal_token.php
- print_reservation_order.php
- process_mail_job.php

## El sistema requiere un CronJob
El que estaba funcionando es:
wget -O /dev/null https://en.machupicchuinkatrek.com/dispatch_mail_jobs.php

así llega la reserva al final. Tenemos código https://machupicchuinkatrek.com/reservation/68H2250295951484P
