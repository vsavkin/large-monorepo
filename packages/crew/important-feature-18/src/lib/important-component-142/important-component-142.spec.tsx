import { render } from '@testing-library/react';

import ImportantComponent142 from './important-component-142';

describe('ImportantComponent142', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent142 />);
    expect(baseElement).toBeTruthy();
  });
});
