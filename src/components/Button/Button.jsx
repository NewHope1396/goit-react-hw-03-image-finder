import { LoadButton } from "./Button.styled"

export const Button = ({loadMore}) => (
    <LoadButton onClick={loadMore} type="button">Load more</LoadButton>
)