import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config = {
    headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
};

const handleDelete = async ({ exercicioDel }) => {
    try {
        toast('Removendo Exercício...');
        await axios.delete(`http://localhost:8000/exercicios/${exercicioDel}`, config, { exercicioDel });
        toast.dismiss();
        toast('Exercício removido com sucesso, atualize a tabela!');
    } catch (error) {
        toast.dismiss();
        if (error.message === 'Request failed with status code 400')
            toast('Não existe um exercício com este id!');
    }
}

export default handleDelete