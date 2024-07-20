import UserAvatar from '@/components/shared/UserAvatar';

const UpdateProfileImage = ({ imageUrl }: { imageUrl: string | null }) => {
  return (
    <div className="flex gap-4 py-4">
      <UserAvatar size={80} imageUrl={imageUrl || ''} />
      <div>
        <h3 className="text-slate-800 font-semibold">Profile Photo</h3>
        <p className="text-sm text-slate-500">
          This will display on your profile
        </p>
      </div>
    </div>
  );
};

export default UpdateProfileImage;
