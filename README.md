# 🧪 Cypress Test Suite – SauceDemo UI & Demoblaze API

Este repositorio contiene pruebas automatizadas usando **Cypress** para cubrir:

- ✅ **UI Test**: Login y proceso de compra en [SauceDemo](https://www.saucedemo.com/)
- 🔐 **API Test**: Login y validación de token de autenticación con la API de [Demoblaze](https://www.demoblaze.com)

---

## 🚀 Requisitos

Antes de ejecutar las pruebas, asegúrate de tener lo siguiente instalado:

- [Node.js](https://nodejs.org/) (v16+ recomendado)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/) (opcional para clonar el repo)

---

## 📦 Instalación

```bash
git clone https://github.com/samill1798rd/examE2E
cd examE2E
npm install
```

---

## 🧪 Ejecución de pruebas

### 🧷 Prueba de UI – SauceDemo

**Flujo cubierto:**

1. Iniciar sesión con credenciales válidas
2. Agregar dos productos al carrito
3. Completar el proceso de checkout con datos de prueba
4. Validar mensaje de compra exitosa

**Credenciales de prueba:**

- Usuario: `standard_user`
- Contraseña: `secret_sauce`

**Ejecutar en modo interactivo (Cypress GUI):**

```bash
npx cypress open
```

Selecciona el archivo:  
`cypress/e2e/ui/sauceDemo.cy.ts`

**O ejecuta en modo headless (terminal):**

```bash
npx cypress run --spec "cypress/e2e/ui/sauceDemo.cy.ts"
```

---

### 🧷 Prueba de API – Demoblaze Login

**Flujo cubierto:**

- Enviar credenciales al endpoint `/login`
- Validar respuesta 200
- Extraer y verificar el `Auth_token` recibido

**Ejecutar en modo interactivo:**

```bash
npx cypress open
```

Selecciona el archivo:  
`cypress/e2e/api/demoblazeAuth.cy.ts`

**Modo headless:**

```bash
npx cypress run --spec "cypress/e2e/api/demoblazeAuth.cy.ts"
```

---

## 🗂️ Estructura del Proyecto

```
examE2E/
│
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   └── demoblazeAuth.cy.ts
│   │   └── ui/
│   │       └── sauceDemoPurchase.cy.ts
│   └── support/
│       └── commands.ts
│
├── cypress.config.ts
├── package.json
└── README.md
```

---

## 👨‍💻 Autor

**Gilbert Samill Rivas Encarnación**  
Software QA Engineer | Test Automation | Instructor QA
