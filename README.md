# Movies App

Aplicación de películas construida con React Native y Expo, utilizando The Movie Database (TMDb) como fuente de datos.

## ✨ Características

- **Visualización de Películas**: Explora diferentes categorías de películas:
  - En cartelera (Now Playing)
  - Populares
  - Mejor calificadas (Top Rated)
  - Próximos estrenos (Upcoming)
- **Componentes de UI**:
  - **Slideshow Principal**: Un carrusel destacado para las películas en cartelera.
  - **Listas Horizontales**: Carruseles para navegar por las categorías de películas.
  - **Vista de Detalle**: Al seleccionar una película, se muestra una pantalla con información detallada, incluyendo:
    - Póster de la película.
    - Descripción y sinopsis.
    - Elenco de actores.

## 🛠️ Stack de Tecnologías

- **Framework**: React Native con Expo
- **Lenguaje**: TypeScript
- **Navegación**: Expo Router (navegación basada en archivos)
- **Estilos**: NativeWind (utiliza Tailwind CSS en React Native)
- **Gestión de paquetes**: pnpm

## 🏗️ Arquitectura del Proyecto

Este proyecto sigue una arquitectura limpia (Clean Architecture) para separar responsabilidades, mejorar la mantenibilidad y facilitar las pruebas. La estructura se divide en las siguientes capas:

### 1. Capa de Presentación (`presentation/` y `app/`)

Responsable de la interfaz de usuario y la interacción con el usuario.

- **`app/`**: Contiene la estructura de navegación y las pantallas principales de la aplicación, utilizando **Expo Router** para la gestión de rutas.
- **`presentation/components/`**: Componentes de React reutilizables que forman la interfaz de usuario (ej. `MoviePoster`, `MovieCast`, `MainSlideShow`).
- **`presentation/hooks/`**: Hooks personalizados (`useMovies`, `useMovie`) que gestionan el estado de la vista, realizan las llamadas a los casos de uso y proporcionan los datos a los componentes.

### 2. Capa de Core (Casos de Uso) (`core/`)

Contiene la lógica de negocio de la aplicación, independientemente de la UI o la fuente de datos.

- **`core/actions/`**: Define los casos de uso de la aplicación (ej. `get-movie-by-id.action.ts`, `now-playing.action.ts`). Estos actions orquestan el flujo de datos desde la infraestructura hacia la presentación.
- **`core/api/`**: Abstracciones o contratos para la obtención de datos, como `movie-api.ts`.

### 3. Capa de Infraestructura (`infraestructure/`)

Gestiona todo lo relacionado con agentes externos, como la API, bases de datos, etc.

- **`infraestructure/interfaces/`**: Define las interfaces de TypeScript para las respuestas de la API externa (ej. `moviedb-response.ts`) y las entidades de dominio de la aplicación (ej. `movie-interface.ts`, `cast-interface.ts`).
- **`infraestructure/mappers/`**: Contiene los mappers (`movie.mapper.ts`, `cast.mapper.ts`) que transforman los datos de la respuesta de la API a las entidades de dominio definidas en el core. Esto es clave para desacoplar la aplicación de la estructura de datos externa.

### Flujo de Datos

1. Un componente en la **Capa de Presentación** (a través de un hook) solicita datos.
2. El hook llama a un **Caso de Uso** en la **Capa de Core**.
3. El Caso de Uso ejecuta la lógica y utiliza el cliente API de la **Capa de Infraestructura** para obtener los datos.
4. La Infraestructura realiza la llamada a la API de TMDb.
5. Los `mappers` de la Infraestructura transforman la respuesta de la API en una entidad de dominio limpia.
6. El Caso de Uso devuelve la entidad a la Capa de Presentación.
7. La UI se actualiza y muestra los datos al usuario.

## 🚀 Cómo empezar

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd movies-app
   ```

2. **Configurar las variables de entorno**:
   - Renombra el archivo `.env.template` a `.env`.
   - Añade tu API Key de The Movie Database (TMDb) en la variable `EXPO_PUBLIC_API_KEY`.
     ```
     EXPO_PUBLIC_API_KEY=tu_api_key_aqui
     ```

3. **Instalar dependencias**:
   Se recomienda usar `pnpm` ya que el proyecto está configurado con un `pnpm-lock.yaml`.
   ```bash
   pnpm install
   ```

4. **Ejecutar la aplicación**:
   ```bash
   pnpm start
   ```
   o
   ```bash
   npx expo start
   ```

Esto iniciará el servidor de desarrollo de Expo, y podrás abrir la aplicación en un emulador de iOS/Android o en tu dispositivo físico usando la app de Expo Go.