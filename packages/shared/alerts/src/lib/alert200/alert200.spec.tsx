import { render } from '@testing-library/react';

import Alert200 from './alert200';

describe('Alert200', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert200 />);
    expect(baseElement).toBeTruthy();
  });
});
