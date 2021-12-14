import { render } from '@testing-library/react';

import Dialog145 from './dialog145';

describe('Dialog145', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog145 />);
    expect(baseElement).toBeTruthy();
  });
});
