import { render } from '@testing-library/react';

import Icon101 from './icon101';

describe('Icon101', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon101 />);
    expect(baseElement).toBeTruthy();
  });
});
