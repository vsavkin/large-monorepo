import { render } from '@testing-library/react';

import Alert30 from './alert30';

describe('Alert30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert30 />);
    expect(baseElement).toBeTruthy();
  });
});
