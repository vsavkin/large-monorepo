import { render } from '@testing-library/react';

import Alert198 from './alert198';

describe('Alert198', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert198 />);
    expect(baseElement).toBeTruthy();
  });
});
