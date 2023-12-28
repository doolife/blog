const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

const Page1 = () => {
    return (
        <div className="section1">
            <strong>{user.name}</strong>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                width: user.imageSize,
                height: user.imageSize
                }}
            />
        </div>
    );
};
  
export default Page1;