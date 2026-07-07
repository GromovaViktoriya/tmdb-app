import s from "./ActorCard.module.css"
import type {CastMember} from "@/features/movies/api/tmdbApi.types.ts";
import {useGetConfigurationQuery} from "@/features/movies/api/tmdbApi.ts";

type Props = {
    actor: CastMember
}

export const ActorCard = ({actor}:Props) => {
    const {data}=useGetConfigurationQuery()
    const secureBaseUrl = data?.images.secure_base_url;
    const posterSize = data?.images.poster_sizes.find(el => el === "w185");

    return (
        <article className={s.card}>
            <div className={s.avatarFrame}>
                <img className={s.avatar} alt={`${actor.name} portrait`} loading="lazy"
                     src={actor.profile_path
                    ? `${secureBaseUrl}${posterSize}/${actor.profile_path}`
                    : "https://placeholder.co/200x200"}/>
            </div>
            <div className={s.info}>
                <p className={s.name}>{actor.name}</p>
                <p className={s.character}>{actor.character}</p>
            </div>
        </article>
    )
}