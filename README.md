<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daky Fernando | Estudiante de Software UTA</title>
    <style>
        /* Variables de color */
        :root {
            --bg-color: #0d1117;
            --card-bg: #161b22;
            --text-main: #c9d1d9;
            --text-muted: #8b949e;
            --accent-color: #58a6ff;
            --accent-hover: #79c0ff;
            --border-color: #30363d;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        /* Encabezado y Perfil */
        header {
            text-align: center;
            margin-bottom: 50px;
            padding-bottom: 30px;
            border-bottom: 1px solid var(--border-color);
        }

        h1 {
            color: var(--text-main);
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .highlight {
            color: var(--accent-color);
        }

        .subtitle {
            font-size: 1.2em;
            color: var(--text-muted);
            margin-bottom: 20px;
        }

        .bio {
            max-width: 700px;
            margin: 0 auto;
            font-size: 1.1em;
        }

        /* Secciones */
        section {
            margin-bottom: 50px;
        }

        h2 {
            color: var(--text-main);
            border-left: 4px solid var(--accent-color);
            padding-left: 10px;
            margin-bottom: 25px;
        }

        /* Grid de Habilidades */
        .skills-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .skill-tag {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9em;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .skill-tag:hover {
            border-color: var(--accent-color);
            color: var(--accent-color);
        }

        /* Grid de Proyectos */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }

        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 20px;
            transition: transform 0.3s, border-color 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
            border-color: var(--accent-color);
        }

        .card h3 {
            margin-top: 0;
            color: var(--text-main);
        }

        .card p {
            color: var(--text-muted);
            font-size: 0.95em;
        }

        /* Botones */
        .btn {
            display: inline-block;
            margin-top: 15px;
            padding: 8px 16px;
            background-color: transparent;
            color: var(--accent-color);
            border: 1px solid var(--accent-color);
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            transition: all 0.3s;
        }

        .btn:hover {
            background-color: var(--accent-color);
            color: var(--bg-color);
        }

        /* Footer */
        footer {
            text-align: center;
            margin-top: 60px;
            padding-top: 20px;
            border-top: 1px solid var(--border-color);
            color: var(--text-muted);
            font-size: 0.9em;
        }

        a {
            color: var(--accent-color);
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <div class="container">
        <!-- Sección de Presentación -->
        <header>
            <h1>Hola, soy <span class="highlight">Daky Fernando</span></h1>
            <p class="subtitle">Estudiante de Ingeniería de Software | Universidad Técnica de Ambato</p>
            <p class="bio">
                Apasionado por el desarrollo de software y la resolución de problemas a través del código. 
                Actualmente me encuentro formándome en la UTA, explorando el mundo del desarrollo web, 
                la lógica de programación y las bases de datos. Siempre en busca de nuevos retos tecnológicos.
            </p>
        </header>

        <!-- Sección de Habilidades Técnicas -->
        <section>
            <h2>💻 Tecnologías y Habilidades</h2>
            <div class="skills-grid">
                <span class="skill-tag">Java</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">HTML5 & CSS3</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">SQL (MySQL)</span>
                <span class="skill-tag">Git & GitHub</span>
                <span class="skill-tag">Lógica de Programación</span>
                <span class="skill-tag">Estructuras de Datos</span>
            </div>
        </section>

        <!-- Sección de Proyectos -->
        <section>
            <h2>🚀 Proyectos Académicos y Personales</h2>
            <div class="projects-grid">
                
                <!-- Proyecto 1 -->
                <div class="card">
                    <h3>Sistema de Gestión de Biblioteca</h3>
                    <p>Proyecto universitario desarrollado en Java y MySQL para administrar el préstamo y devolución de libros, aplicando programación orientada a objetos.</p>
                    <a href="#" class="btn">Ver en GitHub</a>
                </div>

                <!-- Proyecto 2 -->
                <div class="card">
                    <h3>Calculadora de Calificaciones UTA</h3>
                    <p>Una aplicación web sencilla creada con HTML, CSS y JavaScript para que los estudiantes puedan calcular sus promedios ponderados de manera rápida.</p>
                    <a href="#" class="btn">Ver en GitHub</a>
                </div>

                <!-- Proyecto 3 -->
                <div class="card">
                    <h3>Mi Portafolio Web</h3>
                    <p>Este mismo sitio web, diseñado para mostrar mi evolución como estudiante de software y centralizar mis proyectos de GitHub.</p>
                    <a href="https://github.com/Daky345662/Daky345662.github.io" class="btn">Ver Código</a>
                </div>

            </div>
        </section>

        <!-- Pie de página -->
        <footer>
            <p>Conecta conmigo: <a href="https://github.com/Daky345662" target="_blank">GitHub</a> | <a href="#">LinkedIn (Próximamente)</a></p>
            <p>&copy; 2024 Daky Fernando. Estudiante de Software - UTA.</p>
        </footer>
    </div>

</body>
</html>
