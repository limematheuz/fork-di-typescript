# Inyección de dependecias en TS

## Introducción

Este ejercicio tiene como objetivo practicar el concepto de inyección de dependencias en TypeScript. La inyección de dependencias es una técnica de diseño de software en la que las dependencias de un objeto se pasan como argumentos externos en lugar de ser creadas internamente. Esto permite una mayor flexibilidad y facilita la creación de pruebas unitarias y el intercambio de implementaciones.

## Descripción de ejercicio

En este ejercicio, se proporcionan varias clases que representan diferentes aspectos de un sistema de gestión de libros. Las clases incluyen:

- Book: Representa un libro con un título.
- PaperBook: Representa el formatos de libro en papel.
- ElectronicBook: Representa el formato del libro en digital.
- ReadBook: Representa un libro para leer, que incluye un formato de libro y un número de páginas.
- Parchment: Representa un libro en pergamino.

Recuerda que solo se proporciona la estructura de las clases y que deberás completar la implementación de las clases para que el programa funcione correctamente.

## Objetivo

La tarea consiste en completar la implementación de los diferentes tipos de formato que nos podemos encontrar de libros.

La finalidad es conseguir un lector libro que nos diga el formato en cual se puede leer.

## Instrucciones de funcionamiento

### Instalación

Clona este repositorio

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```bash
pnpm install
```

### Ejecución

En primer lugar deberás de compilar el proyecto, para ello ejecuta el siguiente comando:

```bash
npx tsc
```

Lo que hará este comando es compilar el proyecto y actualizar el archivo app.js.

Para ejecutar el proyecto y ver el resultado, ejecuta el siguiente comando:

```bash
node app.js
```

