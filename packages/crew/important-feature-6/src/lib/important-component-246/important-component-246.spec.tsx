import { render } from '@testing-library/react';

import ImportantComponent246 from './important-component-246';

describe('ImportantComponent246', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent246 />);
    expect(baseElement).toBeTruthy();
  });
});
