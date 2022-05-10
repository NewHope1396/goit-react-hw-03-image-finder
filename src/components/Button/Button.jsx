import { LoadButton } from "./Button.styled"
import PropTypes from 'prop-types';

export const Button = ({loadMore}) => (
    <LoadButton onClick={loadMore} type="button">Load more</LoadButton>
)

Button.propTypes = {
    loadMore: PropTypes.func.isRequired
}