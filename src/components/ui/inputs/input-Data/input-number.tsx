import S from './inputs-edit-datas-styled'

export const InputNumber = () => {
  return (
    <div>
    <S.Div>
      <S.Input
       type='number'
       value={dateInput}
       onChange={handleDataInputChange}
       inputWidth={inputStyles.inputWidth}
       inputHeight={inputStyles.inputHeight}

       />
      <S.Label htmlFor={id}>{label}</S.Label>


    </S.Div>
    </div>
  )
}
