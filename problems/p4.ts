import { prisma } from "./prisma";

// get All Pg-13 movies, ordered by release year descending
export const getAllPG13Movies = async () => {
    return await prisma.movie.findMany({
        where: {
            parentalRating: "PG-13"
        },
        orderBy: {
            releaseYear: "desc",
        },
        select: {
            parentalRating: true,
            releaseYear: true
        }
    })
};
