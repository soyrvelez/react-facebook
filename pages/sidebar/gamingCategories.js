import GamingCategory from "./gamingCategoryCards"

const categoryArray = [
    { icon: "controller", name: "all games" },
    { icon: "flag", name: "action" },
    { icon: "map", name: "adventure" },
    { icon: "joystick", name: "arcade" },
    { icon: "sword", name: "battle" },
    { icon: "pawn", name: "board" },
    { icon: "rook", name: "builder" },
    { icon: "card", name: "card" },
    { icon: "dice", name: "casino" },
]

export default function GamingCategories() {
    const displayCategoryArray = categoryArray.map((category, idx) => {
        return <GamingCategory image={category.icon} name={category.name} key={idx} />
    })

    return (
        <div>
            {displayCategoryArray}
        </div>
    )
}
