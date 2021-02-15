import React, {useCallback, useState} from 'react';
import Input from '../components/input';

interface Usuario {
  cep: string;
  cpf: string;
  price: string;
}

const PageMask: React.FC = ({handleKeyUp, mask, ...props}) =>{
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  const handleKeyUpMask = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "cep") {
        cep(e);
      }
      if (mask === "currency") {
        currency(e);
      }
      if (mask === "cpf") {
        cpf(e);
      }
    },
    [mask]
  );

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setUsuario({
        ...usuario,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [usuario]
  );
    <Input
    prefix={'R$'};
    handleKeyUp={handleKeyUpMask}
    />

}