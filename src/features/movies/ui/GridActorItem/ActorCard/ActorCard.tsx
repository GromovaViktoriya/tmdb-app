import s from "./ActorCard.module.css"
import type {CastMember} from "@/features/movies/api/tmdbApi.types.ts";
import {useGetConfigurationQuery} from "@/features/movies/api/tmdbApi.ts";

type Props = {
    actor: CastMember
}

export const ActorCard = ({actor}:Props) => {
    const {data}=useGetConfigurationQuery()
    const secureBaseUrl = data?.images.secure_base_url;
    const profileSize = data?.images.profile_sizes.find(el => el === "w185");
    const hasImage = Boolean(actor.profile_path && secureBaseUrl);

    return (
        <article className={s.card}>
            <div className={s.avatarFrame}>
                {hasImage ? (
                    <img className={s.avatar} alt={`${actor.name} portrait`} loading="lazy"
                         src={`${secureBaseUrl}${profileSize}/${actor.profile_path}`} />
                ) : (
                    <span className={s.fallbackText}>{actor.name}</span>
                )
                }
            </div>
            <div className={s.info}>
                <p className={s.name}>{actor.name}</p>
                <p className={s.character}>{actor.character}</p>
            </div>
        </article>
    )
}