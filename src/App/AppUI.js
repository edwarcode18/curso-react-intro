import React from 'react';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { EmptyTodos } from '../components/EmptyTodos';
import { Modal } from '../components/Modal';
import { TodoCounter } from '../components/TodoCounter';
import { TodoForm } from '../components/TodoForm';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodosError } from '../components/TodosError';
import { TodosLoading } from '../components/TodosLoading';
import { TodoContext } from '../TodoContext';

function AppUI() {
    const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);
    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton setOpenModal={setOpenModal} />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export { AppUI };
