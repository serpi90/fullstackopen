const Course = ({ course }) => (<div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
</div>);

const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => <p> {part.name} {part.exercises} </p>;

const Content = ({ parts }) => parts.map(part => <Part part={part} key={part.id} />);

const Total = (props) => <p><strong>Total of {props.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong></p>;

export default Course;