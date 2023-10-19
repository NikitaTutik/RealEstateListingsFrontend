import { Button, Link } from "@nextui-org/react";

const NewAdButton = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button color="warning" as={Link} href="/newad">
        New
      </Button>
    </div>
  );
};

export default NewAdButton;
