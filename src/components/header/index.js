import React, { useState } from 'react';
import * as S from './styled';
import useGithub from "../../hooks/github-hooks";

const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

      const submitGetUser = () => {

        document.addEventListener("keypress", function(e) {
            if(e.key === 'Enter') {
            
            var btn = document.getElementById("enter");
              
              btn.click();
            
            }
          });

        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    return (
        <header>
            <S.Wrapper>
                <input type="text" 
                placeholder='Digite o usuário para pesquisar...' 
                onChange={(event) => 
                setUsernameForSearch(event.target.value)} />
                <button type="submit" id="enter" onClick={submitGetUser}>
                    <span>Buscar</span></button>
            </S.Wrapper>
        </header>

    );
};

export default Header;


