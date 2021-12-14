import { render } from '@testing-library/react';

import ImportantComponent204 from './important-component-204';

describe('ImportantComponent204', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent204 />);
    expect(baseElement).toBeTruthy();
  });
});
