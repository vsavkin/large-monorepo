import { render } from '@testing-library/react';

import ImportantComponent138 from './important-component-138';

describe('ImportantComponent138', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent138 />);
    expect(baseElement).toBeTruthy();
  });
});
