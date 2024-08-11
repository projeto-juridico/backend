
# Serviço: Verificação de Usuário

## Descrição:
Este serviço verifica se um usuário existe no banco de dados com base no email fornecido.

## Método: `POST`

### Endpoint:
`/user/check-user`

### Body da Requisição:
```json
{
    "email": "exemplo@dominio.com"
}
```

### Resposta:
#### Sucesso (`200 OK`):
```json
{
    "exists": true,
    "message": "Usuário já existe"
}
```

#### Falha (`404 Not Found`):
```json
{
    "exists": false,
    "message": "Usuário não encontrado"
}
```

#### Erro (`500 Internal Server Error`):
```json
{
    "message": "Erro interno no servidor"
}
```

### Códigos de Status:
- `200 OK` - Usuário encontrado ou não encontrado.
- `400 Bad Request` - Quando o campo `email` está faltando na requisição.
- `500 Internal Server Error` - Em caso de erro no servidor.

---

### Exemplo de Uso:

#### Requisição:
```
POST /user/check-user
Host: juridico-backend.adaptable.app
Content-Type: application/json
```
```json
{
    "email": "exemplo@dominio.com"
}
```

#### Resposta:
```json
{
    "exists": true,
    "message": "Usuário já existe"
}
```
