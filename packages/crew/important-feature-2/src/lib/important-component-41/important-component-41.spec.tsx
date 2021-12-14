import { render } from '@testing-library/react';

import ImportantComponent41 from './important-component-41';

describe('ImportantComponent41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent41 />);
    expect(baseElement).toBeTruthy();
  });
});
