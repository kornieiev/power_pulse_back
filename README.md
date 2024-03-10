# СТАТУС-КОДЫ И ИХ ЗНАЧЕНИЯ:

# 200 OK:

Запрос был успешно выполнен. Это обычно используется для успешных операций.

# 201 Created:

Запрос успешно создал новый ресурс. Это обычно используется после успешного создания нового объекта или записи на сервере.

# 400 Bad Request:

Сервер не может обработать запрос из-за некорректного синтаксиса или неправильных параметров. Например, этот код может быть возвращен, если клиент отправил недопустимые данные.

# 401 Unauthorized:

Для доступа к запрашиваемому ресурсу требуется аутентификация. Это означает, что клиент должен предоставить дополнительные учетные данные.

# 403 Forbidden:

Клиенту запрещено доступ к запрашиваемому ресурсу, даже если он аутентифицирован. Это может быть вызвано ограничениями на доступ или правами пользователя.

# 404 Not Found:

Запрашиваемый ресурс не найден на сервере. Это может произойти, если клиент запрашивает URL, который не существует или был удален.

# 405 Method Not Allowed:

Метод, используемый в запросе (например, GET, POST, PUT), не поддерживается для данного ресурса. Например, попытка выполнения GET-запроса к ресурсу, который разрешает только POST-запросы, может привести к этому статусу.

# 500 Internal Server Error:

Внутренняя ошибка сервера. Этот статус возвращается, когда сервер столкнулся с неожиданной ситуацией, которая не позволила ему обработать запрос.

# 503 Service Unavailable:

Сервер временно не может обрабатывать запросы из-за перегрузки или проведения технических работ. Это обычно временная ситуация, и клиенту рекомендуется повторить запрос позже.

//

// multipart/form-data:
// https://youtu.be/oQaoymCOW8o?t=2604 - 43:00
