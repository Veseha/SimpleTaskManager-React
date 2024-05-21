interface IUser {
    id: number;
    first_name: string;
    second_name: string;
    email: string;
    create_date: Date;
    role: string;
    team_id: number;
    password: string;
}

interface ITeam {
    team_id: number;
    team_name: string;
}

interface IBoard {
    board_id: number;
    board_name: string;
    team_id: number;
}

interface ITask {
    id: number;
    title: string;
    description: string;
    owner: string;
    createDate: Date;
    status: number;
    type: string;
    priority: string;
    epic: string;
    bg: string;
    creator_user_id: number;
    executor_user_id: number;
    board_id: number;
}