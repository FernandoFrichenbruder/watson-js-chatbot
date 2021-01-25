import { render, screen } from '@testing-library/react';
import App from '../App';
import axios from 'axios';
import Message from '../components/UI/molecules/Message';

describe('fetchData', () => {

    //precisa validar o status e a resposta
    it('fetches successfully data from an API', async () => {
        const res = await axios.get("/api/watson/session");
        console.log("AXIOS: " + res);
        const a = 5;
        expect(a).toBe(5);
    });
});

describe('Render App', () => {
    it('Should renders all components', () => {
        render(<App />);

        const header = screen.getByText(/Bot Name/i);
        expect(header).toBeInTheDocument();

        const dialog = screen.getByTestId("dialog");
        expect(dialog).toBeInTheDocument();

        const footer = screen.getByTestId("input");
        expect(footer).toBeInTheDocument();
    });
});

describe('Render Messages', () => {
    it('Should renders all components', () => {
        render(<Message text="Olá" type="user" />);

        const message = screen.getByText('Olá');
        expect(message).toBeInTheDocument();
    });
});

describe('Start testing API', () => {
    it('should return 200 accessing /session', async () => {
        const response = await axios.get('/api/watson/session');
        expect(response.status).toEqual(200);
    });

    it('should return 200 accessing /session', async () => {
        const response = await axios.get('/api/watson/session');
        expect(response.status).toEqual(200);
    });
});
