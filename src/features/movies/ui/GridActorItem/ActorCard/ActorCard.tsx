import s from "./ActorCard.module.css"
import type {CastMember} from "@/features/movies/api/tmdbApi.types.ts";
import {useGetConfigurationQuery} from "@/features/movies/api/tmdbApi.ts";
import {useState} from "react";
import Skeleton from "react-loading-skeleton";

type Props = {
    actor: CastMember
}

export const ActorCard = ({actor}:Props) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const {data}=useGetConfigurationQuery()
    const secureBaseUrl = data?.images.secure_base_url;
    const posterSize = data?.images.poster_sizes.find(el => el === "w185");

    return (
        <article className={s.card}>
            <div className={s.avatarFrame}>
                {!isImageLoaded && (
                    <Skeleton width="100%" height="100%" borderRadius={999}
                              baseColor={"var(--color-gray-300)"}
                              highlightColor={"var(--color-gray-300)"}
                    />
                )}
                <img className={s.avatar} alt={`${actor.name} portrait`} loading="lazy"
                     src={actor.profile_path
                    ? `${secureBaseUrl}${posterSize}/${actor.profile_path}`
                    : "https://placeholder.co/200x200"}
                     style={{ display: isImageLoaded ? 'block' : 'none' }}
                     onLoad={() => setIsImageLoaded(true)}
                />
            </div>
            <div className={s.info}>
                <p className={s.name}>{actor.name}</p>
                <p className={s.character}>{actor.character}</p>
            </div>
        </article>
    )
}