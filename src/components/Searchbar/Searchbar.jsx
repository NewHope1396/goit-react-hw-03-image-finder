import { Formik } from "formik"
import { SearchbarContainer, FormContainer, SearchInput, SearchButton, ButtonLabel } from "components/Searchbar/Searchbar.styled"
import PropTypes from 'prop-types';

export const Searchbar = ({ onSearchSubmit }) => (
    <SearchbarContainer>
        <Formik    
            initialValues={{
                search: '',
            }}
            onSubmit={(values, actions) => {
                onSearchSubmit(values.search);
                actions.resetForm();
        }}>
            <FormContainer>
                <SearchButton type="submit">
                    <ButtonLabel>Search</ButtonLabel>
                </SearchButton>
                <SearchInput type="text" autoComplete="off" autoFocus name="search" placeholder="Search images and photos"></SearchInput>
            </FormContainer>    
        </Formik>
    </SearchbarContainer>
)

Searchbar.propTypes = {
    onSearchSubmit: PropTypes.func.isRequired
}