import { render } from '@testing-library/react';

import Icon97 from './icon97';

describe('Icon97', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon97 />);
    expect(baseElement).toBeTruthy();
  });
});
