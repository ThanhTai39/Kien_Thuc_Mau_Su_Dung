import Snowfall from 'react-snowfall';

const MatrixBackground = () => {
    return (
        <Snowfall
            color="#00FF00"
            snowflakeCount={200}
            speed={[0.5, 1.5]}
            wind={[-0.5, 2.0]}
            radius={[0.5, 3.0]}
            style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                zIndex: 0
            }}
        />
    );
};

export default MatrixBackground;
