import { render } from '@testing-library/react';

import Icon10 from './icon10';

describe('Icon10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon10 />);
    expect(baseElement).toBeTruthy();
  });
});
