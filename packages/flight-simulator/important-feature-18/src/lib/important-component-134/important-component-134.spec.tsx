import { render } from '@testing-library/react';

import ImportantComponent134 from './important-component-134';

describe('ImportantComponent134', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent134 />);
    expect(baseElement).toBeTruthy();
  });
});
