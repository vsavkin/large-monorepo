import { render } from '@testing-library/react';

import Alert138 from './alert138';

describe('Alert138', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert138 />);
    expect(baseElement).toBeTruthy();
  });
});
