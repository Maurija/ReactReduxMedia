import { GoTrashcan} from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store/thunks/removeUser'
import { useThunk } from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';



function UsersListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);
    
    const onHandleClick = () => {
        doRemoveUser(user);
    }
    const header = <>                       
                    <Button className="mr-3" loading={isLoading} onClick={onHandleClick}>
                        <GoTrashcan  />
                    </Button>
                    {error && <div>Error deleting user.</div>}
                    {user.name}
                </>
    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user}/>
        </ExpandablePanel>
            );
}

export default UsersListItem;