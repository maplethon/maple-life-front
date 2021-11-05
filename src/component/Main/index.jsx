import Login from '../Login';
import LoginAnnounceModal from '../LoginAnnounceModal';
import { useState } from 'react';
import { Box } from '@mui/material';
import Task from '../Task';
import ExpBar from '../ExpBar';
import AddTaskModal from '../AddTaskModal';

export default function Main() {
  const [open, setOpen] = useState(true);

  return (
    <Box>
      <AddTaskModal />

      <Login />
      <LoginAnnounceModal open={open} closeModal={() => setOpen(false)} />
      <Box sx={{ width: 250 }}>
        <Task
          icon="sun"
          task_title="단풍톤 asdfasdfasd 코딩"
          expected_time={3.5}
        />
      </Box>
      <Box sx={{ width: 400 }}>
        <Task icon="sun" task_title="단풍톤 코딩" expected_time={3.5} />
      </Box>
      <Box sx={{ width: 400 }}>
        <Task
          icon="sun"
          task_title="단풍톤 코딩"
          expected_time={3.5}
          status="DOING"
        />
      </Box>
      <Box sx={{ width: 400 }}>
        <Task icon="sun" task_title="단풍톤 코딩" expected_time={3.5} dense />
      </Box>
      <ExpBar ratio={0.3} />
    </Box>
  );
}
