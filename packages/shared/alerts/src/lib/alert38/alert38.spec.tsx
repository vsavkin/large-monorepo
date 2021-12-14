import { render } from '@testing-library/react';

import Alert38 from './alert38';

describe('Alert38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert38 />);
    expect(baseElement).toBeTruthy();
  });
});
