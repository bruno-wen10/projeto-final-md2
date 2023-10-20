import { ButtonSave } from "./button-save-styled";

// Componente SaveButton
interface SaveButtonProps {
  onClick: () => void; // Função para manipular o clique no botão
}

const SaveButton: React.FC<SaveButtonProps> = ({ onClick }) => {
  return (
    <ButtonSave type="button" onClick={onClick}>
      Salvar
    </ButtonSave>
  );
};

export default SaveButton;
