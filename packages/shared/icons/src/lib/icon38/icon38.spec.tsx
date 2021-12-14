import { render } from '@testing-library/react';

import Icon38 from './icon38';

describe('Icon38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon38 />);
    expect(baseElement).toBeTruthy();
  });
});
