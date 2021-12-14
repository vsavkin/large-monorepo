import { render } from '@testing-library/react';

import Icon173 from './icon173';

describe('Icon173', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon173 />);
    expect(baseElement).toBeTruthy();
  });
});
