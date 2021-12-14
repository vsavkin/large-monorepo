import { render } from '@testing-library/react';

import Icon111 from './icon111';

describe('Icon111', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon111 />);
    expect(baseElement).toBeTruthy();
  });
});
