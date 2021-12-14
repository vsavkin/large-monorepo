import { render } from '@testing-library/react';

import Dialog106 from './dialog106';

describe('Dialog106', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog106 />);
    expect(baseElement).toBeTruthy();
  });
});
