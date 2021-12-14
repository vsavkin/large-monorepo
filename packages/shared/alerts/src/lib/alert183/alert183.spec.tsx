import { render } from '@testing-library/react';

import Alert183 from './alert183';

describe('Alert183', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert183 />);
    expect(baseElement).toBeTruthy();
  });
});
