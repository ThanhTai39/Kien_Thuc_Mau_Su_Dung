<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAMP Stack - By Thành Tài 39</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #0c0c1e 0%, #1a1a2e 50%, #16213e 100%);
            overflow: hidden;
            position: relative;
        }

        /* Animated background particles */
        .particles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            animation: float 15s infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }

        .container {
            text-align: center;
            z-index: 10;
            padding: 2rem;
        }

        .logo-container {
            margin-bottom: 2rem;
            animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .lamp-icon {
            font-size: 5rem;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 0 40px rgba(240, 147, 251, 0.5);
        }

        h1 {
            font-size: 3.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            text-shadow: 0 0 60px rgba(102, 126, 234, 0.4);
        }

        .subtitle {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 2.5rem;
            font-weight: 300;
        }

        .author {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
            border: 2px solid rgba(102, 126, 234, 0.5);
            border-radius: 50px;
            color: #fff;
            font-size: 1.3rem;
            font-weight: 600;
            letter-spacing: 2px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from { box-shadow: 0 0 20px rgba(102, 126, 234, 0.3), 0 0 40px rgba(102, 126, 234, 0.1); }
            to { box-shadow: 0 0 30px rgba(240, 147, 251, 0.4), 0 0 60px rgba(240, 147, 251, 0.2); }
        }

        .author:hover {
            transform: translateY(-5px);
            border-color: #f093fb;
            box-shadow: 0 10px 40px rgba(240, 147, 251, 0.3);
        }

        .tech-stack {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 3rem;
            flex-wrap: wrap;
        }

        .tech-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            min-width: 100px;
        }

        .tech-item:hover {
            transform: translateY(-10px);
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(102, 126, 234, 0.5);
        }

        .tech-icon {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }

        .tech-name {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
            font-weight: 500;
        }

        .version {
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.75rem;
            margin-top: 0.3rem;
        }

        .status {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 2rem;
            color: #4ade80;
            font-size: 0.9rem;
        }

        .status-dot {
            width: 10px;
            height: 10px;
            background: #4ade80;
            border-radius: 50%;
            animation: blink 1.5s ease-in-out infinite;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }

        @media (max-width: 768px) {
            h1 { font-size: 2.5rem; }
            .subtitle { font-size: 1rem; }
            .author { font-size: 1.1rem; padding: 0.8rem 2rem; }
            .tech-stack { gap: 1rem; }
            .tech-item { padding: 1rem; min-width: 80px; }
        }
    </style>
</head>
<body>
    <div class="particles">
        <?php for ($i = 0; $i < 50; $i++): ?>
            <div class="particle" style="
                left: <?= rand(0, 100) ?>%;
                animation-delay: <?= rand(0, 15) ?>s;
                animation-duration: <?= rand(10, 20) ?>s;
            "></div>
        <?php endfor; ?>
    </div>

    <div class="container">
        <div class="logo-container">
            <div class="lamp-icon">Docker Compose</div>
        </div>
        
        <h1>LAMP Stack</h1>
        <p class="subtitle">Linux • Apache • MySQL • PHP</p>
        
        <div class="author">By Thành Tài 39</div>

        <div class="tech-stack">
            <div class="tech-item">
                <span class="tech-icon">🐧</span>
                <span class="tech-name">Linux</span>
                <span class="version">Debian</span>
            </div>
            <div class="tech-item">
                <span class="tech-icon">🪶</span>
                <span class="tech-name">Apache</span>
                <span class="version"><?= apache_get_version() ? explode('/', apache_get_version())[1] : '2.4' ?></span>
            </div>
            <div class="tech-item">
                <span class="tech-icon">🐬</span>
                <span class="tech-name">MySQL</span>
                <span class="version">8.4</span>
            </div>
            <div class="tech-item">
                <span class="tech-icon">🐘</span>
                <span class="tech-name">PHP</span>
                <span class="version"><?= PHP_VERSION ?></span>
            </div>
            <div class="tech-item">
                <span class="tech-icon">🔴</span>
                <span class="tech-name">Redis</span>
                <span class="version">Latest</span>
            </div>
        </div>

        <div class="status">
            <div class="status-dot"></div>
            <span>Server is running</span>
        </div>
    </div>
</body>
</html>
