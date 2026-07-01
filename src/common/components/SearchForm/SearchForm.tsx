import s from "./SearchForm.module.css"
import {type SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router";
import {Path} from "@/common/routing";

interface SearchFormValues {
    searchQuery: string;
}

export const SearchForm = () => {
    const {
        register,
        handleSubmit,
        watch,
    } = useForm<SearchFormValues>({
        defaultValues: {
            searchQuery: ''
        }
    });
    const navigate = useNavigate();
    const currentSearchQuery = watch('searchQuery');
    const isDisabled = currentSearchQuery.trim() === '';


    const onSubmit: SubmitHandler<SearchFormValues> = (data) => {
        const query = data.searchQuery.trim();
        if (query) {
            navigate(`${Path.Search}?query=${encodeURIComponent(query)}`);
        }
    };

    return (
            <form className={`${s.form} ${s.formWrapper}`} onSubmit={handleSubmit(onSubmit)}>
                <input type="search" className={s.input} placeholder="Search for a movie" {...register('searchQuery')}/>
                <button type="submit" className={"button variantMain sizeMedium"} disabled={isDisabled}>Search</button>
            </form>
    )
}