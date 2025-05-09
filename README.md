# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# Carrusel Estático UCASAL

Este proyecto implementa un carrusel estático con navegación manual para UCASAL. El carrusel contiene diferentes slides con información relevante para estudiantes y visitantes.

## Características

- Carrusel de slides estático con navegación manual
- Botones de flecha para navegación entre slides
- Miniaturas en la parte inferior para navegación rápida
- Diseño responsivo para dispositivos móviles y de escritorio
- Cada slide es un componente independiente para fácil mantenimiento

## Slides Implementados

1. **Video Slide**: Muestra un video de presentación de UCASAL
2. **Botones de Navegación**: Proporciona acceso a diferentes secciones (Ingresantes, Alumnos, Exámenes Finales, etc.)

## Tecnologías Utilizadas

- [Astro](https://astro.build/) - Framework web rápido para sitios estáticos
- HTML/CSS/JavaScript - Tecnologías web estándar

## Configuración del Proyecto

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Navegar al directorio del proyecto
cd [nombre-del-directorio]

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## Personalizando el Carrusel

Para agregar nuevos slides al carrusel:

1. Crear un nuevo componente en `src/components/slides/`
2. Importar el componente en `src/components/Carousel.astro`
3. Agregar el componente a la estructura del carrusel
4. Actualizar la navegación (miniaturas) según sea necesario

## Recursos Adicionales

Para mejorar la experiencia de usuario del carrusel, considere:

- Añadir indicadores de progreso/posición
- Implementar teclas de acceso rápido (flechas izq/der)
- Añadir transiciones suaves entre slides
- Mejorar la accesibilidad con atributos ARIA adicionales

## Notas para el Desarrollo

Este carrusel está diseñado para ser completamente estático, cambiando solo cuando el usuario interactúa con los controles de navegación. No incluye funcionalidad de autoplay ni cambio automático de slides.

## Licencia

[Incluir información de licencia]
